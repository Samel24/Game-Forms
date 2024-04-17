import React, { useState, useEffect } from "react";

import { Card, CardContent } from "@/components/ui/card";

export function ReviewsGrid() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("http://localhost:7000/api/games/");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="bg-[#EDEDED] py-8">
      <div className="text-center text-2xl font-semibold mb-6">
        Revisa nuestras reseñas más populares
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {games.map((game, index) => (
          <Card key={index} className="max-w-md mx-auto">
            <CardContent>
              <img
                src={`https:${game.screenshots?.[0].url.replace('t_thumb', 't_screenshot_big')}`}
                alt={`Screenshot of ${game.name}`}
                className="w-full h-auto"
              />
              <div className="bg-black bg-opacity-75 px-4 py-2 text-white text-center">
                {game.name}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ReviewsGrid;

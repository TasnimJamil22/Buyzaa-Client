"use client";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Input, Textarea } from "@heroui/input";
import { useState } from "react";

interface Review {
  id: number;
  name: string;
  comment: string;
  date: string;
}

export default function ProductReview() {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: "Sarah",
      comment: "Great product, loved the quality!",
      date: "2025-09-20",
    },
    {
      id: 2,
      name: "John",
      comment: "Fast delivery and good packaging.",
      date: "2025-09-25",
    },
  ]);

  const [newReview, setNewReview] = useState({ name: "", comment: "" });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    const review: Review = {
      id: Date.now(),
      name: newReview.name,
      comment: newReview.comment,
      date: new Date().toISOString().split("T")[0],
    };

    setReviews([review, ...reviews]);
    setNewReview({ name: "", comment: "" });
  };

  return (
    <section>
      {/* Reviews Section */}

      <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>

      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id} className="shadow-sm">
            <CardBody className="p-4">
              <p className="font-semibold">{review.name}</p>
              <p className="text-gray-600 text-sm">{review.comment}</p>
              <p className="text-xs text-gray-400 mt-2">{review.date}</p>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Add Review Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-6 p-4 border rounded-lg space-y-4"
      >
        <h3 className="text-lg font-semibold">Write a Review</h3>
        <Input
          type="text"
          placeholder="Your Name"
          value={newReview.name}
          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
        />
        <Textarea
          placeholder="Your Review"
          value={newReview.comment}
          onChange={(e) =>
            setNewReview({ ...newReview, comment: e.target.value })
          }
        />
        <Button type="submit" className="w-full">
          Submit Review
        </Button>
      </form>
    </section>
  );
}

"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { StarIcon, ThumbsUp } from "lucide-react"

interface Review {
  id: string
  author: string
  rating: number
  date: string
  comment: string
  helpful: number
}

const mockReviews: Review[] = [
  {
    id: "1",
    author: "Anna Kowalska",
    rating: 5,
    date: "2025-01-15",
    comment: "Wspaniały hotel! Obsługa na najwyższym poziomie, pokoje czyste i przestronne. Śniadania pyszne. Polecam!",
    helpful: 12,
  },
  {
    id: "2",
    author: "Piotr Nowak",
    rating: 4,
    date: "2025-01-10",
    comment:
      "Bardzo dobry hotel, świetna lokalizacja. Jedyny minus to brak klimatyzacji w pokoju, ale poza tym wszystko super.",
    helpful: 8,
  },
  {
    id: "3",
    author: "Maria Wiśniewska",
    rating: 5,
    date: "2025-01-05",
    comment:
      "Idealne miejsce na weekend. Spa jest fantastyczne, a restauracja serwuje wyśmienite dania. Wrócimy na pewno!",
    helpful: 15,
  },
]

export function ReviewSection({ hotelId, hotelName }: { hotelId: string; hotelName: string }) {
  const [reviews] = useState<Review[]>(mockReviews)
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [newRating, setNewRating] = useState(5)
  const [newComment, setNewComment] = useState("")

  const handleSubmitReview = () => {
    // In a real app, this would submit to an API
    console.log("[v0] Submitting review:", { hotelId, rating: newRating, comment: newComment })
    setShowReviewForm(false)
    setNewComment("")
    setNewRating(5)
  }

  return (
    <Card className="bg-card border-primary/30">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Opinie gości</h2>
          <Button
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="bg-[#EDFF23]/90 backdrop-blur-md text-white hover:bg-[#EDFF23] border border-[#EDFF23]/30 font-semibold transition-all"
          >
            Dodaj opinię
          </Button>
        </div>

        {showReviewForm && (
          <div className="mb-6 p-4 bg-dark/50 backdrop-blur-md rounded-lg border border-primary/20">
            <h3 className="text-lg font-semibold text-white mb-4">Twoja opinia</h3>

            <div className="mb-4">
              <label className="text-sm font-medium text-white mb-2 block">Ocena</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} onClick={() => setNewRating(star)} className="transition-colors">
                    <StarIcon
                      className={`h-8 w-8 ${star <= newRating ? "fill-primary text-primary" : "text-muted-foreground"}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="text-sm font-medium text-white mb-2 block">Komentarz</label>
              <Textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Podziel się swoją opinią o hotelu..."
                className="min-h-[120px] bg-background border-primary/20"
              />
            </div>

            <div className="flex gap-2">
              <Button
                onClick={handleSubmitReview}
                className="bg-[#EDFF23]/90 backdrop-blur-md text-white hover:bg-[#EDFF23] border border-[#EDFF23]/30 font-semibold transition-all"
              >
                Opublikuj opinię
              </Button>
              <Button
                onClick={() => setShowReviewForm(false)}
                variant="outline"
                className="border-primary/20 text-white hover:bg-primary/10"
              >
                Anuluj
              </Button>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="p-4 rounded-lg border border-primary/20 bg-dark/50 backdrop-blur-sm">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="font-semibold text-white">{review.author}</div>
                  <div className="text-sm text-white/70">{new Date(review.date).toLocaleDateString("pl-PL")}</div>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <p className="text-white leading-relaxed mb-3">{review.comment}</p>
              <button className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors">
                <ThumbsUp className="h-4 w-4" />
                <span>Pomocne ({review.helpful})</span>
              </button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

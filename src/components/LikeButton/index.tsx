import { HeartStraight, ThumbsUp } from '@phosphor-icons/react';

interface LikeButtonProps {
  liked: boolean;
  handleLiked: () => void;
}

export default function LikeButton({ liked, handleLiked }: LikeButtonProps) {
  return (
    <i>
      {liked 
        ? <HeartStraight weight="fill" onClick={() => handleLiked()} /> 
        : <HeartStraight onClick={() => handleLiked()} />}
    </i>
  )
}

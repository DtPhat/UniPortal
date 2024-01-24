import { useState } from "react";

type Props = {
  text: string
  limit: number
}

const ExpandableArea = ({ text, limit }: Props) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <h6>
      {showMore ? text : `${text.substring(0, limit)}...`}{' '}
      <button className="text-sky-700 hover:opacity-80 dark:hover:text-sky-300 font-semibold" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show less" : "Show more"}
      </button>
    </h6>
  )
}

export default ExpandableArea
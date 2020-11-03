import React from "react";

/**
 * The correct way to display an emoji
 * 
 * @example 
 * <Emoji ariaLabel="A lightning bolt" symbol="⚡" />
 */
const Emoji = ({ ariaLabel, symbol }) => (
  <span role="img" aria-label={ariaLabel}>
    {symbol}
  </span>
);
export default Emoji;

import React, { useContext, useState }from "react";
import { paletteContext } from "./Context";
import EmojiDead from "../assets/emoji/emojiDead.png";
import EmojiMoney from "../assets/emoji/emojiMoney.png";
import EmojiScared from "../assets/emoji/emojiScared.png";
import EmojiSmiley from "../assets/emoji/emojiSmiley.png";


export default function EmojiBox(props) {

    const { palette } = useContext(paletteContext);

    const listEmoji = [EmojiDead, EmojiMoney, EmojiScared, EmojiSmiley]

    const emojis = listEmoji.map((emoji) => {

        const [isHovered, setIsHovered] = useState(false);

        const handleMouseEnter = () => {
            setIsHovered(true);
        };
        
          const handleMouseLeave = () => {
            setIsHovered(false);
        };

        const tempStyle = {
            backgroundImage:`url('${emoji}')`,
            transition:'.75s',
            cubicBezier:`(0.42, 0, 1.0, 1.0)`,
            border: isHovered ? `2px solid ${palette.color3}` : `2px solid ${palette.color2}`,
            cursor: 'pointer'
        }
        return (
            <div className="emoji--box" 
            style={tempStyle}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            >
            </div>
        )
    })

    return (
        <div className="emoji--container" style={{backgroundColor: `${palette.color2}`, borderTop: `4px solid ${palette.color1}`}}>
            {emojis}    
        </div>
    )
}
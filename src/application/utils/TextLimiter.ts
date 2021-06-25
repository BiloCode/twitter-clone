type LimiterSize = "default" | "large" | "short";

class TextLimiter {
  static exec = (text: string, size?: LimiterSize): string => {
    const default_limiter = 20;
    const limiters = {
      large: 200,
      short: 8,
    };

    const max_characters = limiters[size] || default_limiter;

    if (text.length < max_characters) {
      return text;
    }

    return text.trim().slice(0, max_characters) + "...";
  };
}

export default TextLimiter;

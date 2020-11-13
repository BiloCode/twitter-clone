const useTextLimit = () => (text : string) => {
  const formatedText = text.trim(),
    limit = 23;

  return (formatedText.length > limit) ? 
            formatedText.substr(0,limit) + '...' :
            formatedText;
}

export default useTextLimit;
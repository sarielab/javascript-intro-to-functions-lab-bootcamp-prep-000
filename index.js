var shout = (word) => {
  return `${word}`.toUpperCase()
}

var whisper = (word) => (`${word}`.toLowerCase())

var logShout = word => {
  console.log(shout(word))
}

var logWhisper = word => {
  console.log(whisper(word))
}

var sayHiToGrandma = hi => {
  if(hi.toLowerCase() === hi)
  if(hi.toUpperCase() === hi)
  
}
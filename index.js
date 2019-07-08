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
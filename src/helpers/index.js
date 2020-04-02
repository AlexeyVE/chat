  
  let rColor = () => {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
  
  export const gradient = {background:`linear-gradient(135deg, ${rColor()}, ${rColor()})`}
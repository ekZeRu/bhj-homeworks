function getHole( index ) {
    return document.getElementById(`hole${index}`)
  }
  function isActiveHole(hole) {
    return hole.className.includes( 'hole_has-mole' )
  }
  let i = 1
  let killed = 0
  let missed = 0
  let dead = document.getElementById('dead')
  let lost = document.getElementById('lost')
  for (i = 1; i < 10; i++) {
    getHole(i).onclick = function(hole) {
      console.log(hole)
      if (isActiveHole(this)){
      killed += 1
      }
    else {
      missed += 1
    }
  dead.innerHTML = killed
  lost.innerHTML = missed
  if (killed === 10 && missed < 5) {
    ('Игрок победил')
    killed = 0
    missed = 0
  } if (missed === 5 && killed < 10) {
  
    alert('Игрок проиграл')
    killed = 0
    missed = 0
  }
  dead.innerHTML = killed
  lost.innerHTML = missed
    }
  }
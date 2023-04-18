const person = {
    name: "Luke",
    job: "Farmer",
    parents: ["Anakin", "Padme"]
  }
  
  const name = person.name
  
  const { job, parents } = person
  
  console.log(name, job, parents)
  
  const [father, mother] = parents
  
  console.log(father, mother)
  
  function createUser({ name, job, parents }) {
    const id = Math.floor(Math.random() * 9999)
    return {
      id,
      name,
      job,
      parents
    }
  }
  
  const luke = createUser(person)
  
  console.log(luke)
  const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
console.log(...towns)
console.log(...towns[0])

const townsCopy = towns

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')

console.log({ towns, townsCopy })

const townsClone = [...towns]

townsClone.push('Aldebaran')

console.log({ towns, townsCopy, townsClone })

const townsObj = { ...towns }
const townsObjClone = { ...townsObj }

townsObjClone.test = 'Test'

console.log({ townsObj, townsObjClone })
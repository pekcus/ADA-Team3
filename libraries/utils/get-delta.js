import deltaE from 'delta-e'

export default (LAB1, LAB2, formula) => {
  return deltaE[`getDelta${formula}`](
    { L: LAB1[0], A: LAB1[1], B: LAB1[2] },
    { L: LAB2[0], A: LAB2[1], B: LAB2[2] }
  )
}

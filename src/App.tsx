import styled from 'styled-components'
import { motion } from 'framer-motion'

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`

const boxVars = {
  hover: { rotate: 90, scale: 1.3 },
  click: { borderRadius: '100px', scale: 1, rotate: -90 },
  drag: { backgroundColor: 'rgb(46, 204, 113)', transition: { duration: 2 } },
}

function App() {
  return (
    <Wrapper>
      <Box
        drag
        variants={boxVars}
        whileHover="hover"
        whileTap="click"
        whileDrag="drag"
      ></Box>
    </Wrapper>
  )
}

export default App

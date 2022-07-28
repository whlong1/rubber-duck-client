import { useEffect, useState, useRef } from 'react'
import Box from '@mui/material/Box'
import Popper from '@mui/material/Popper'
import Button from '@mui/material/Button'
import { ReactComponent as DuckIcon } from '../../../../assets/logo-icon.svg'


const AnalysisPopper = ({ tips, warnings }) => {
  const duckEl = useRef()
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)

  // const handleClick = (event) => {
  //   setAnchorEl(anchorEl ? null : event.currentTarget)
  //   console.log(event.currentTarget)
  // }

  useEffect(() => {
    setOpen(tips.length > 0 || warnings.length > 0)
    setAnchorEl(duckEl.current)
  }, [tips, warnings])

  const id = open ? 'simple-popper' : undefined

  return (
    <Box sx={{ padding: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
      <Button aria-describedby={id} type="button">
        <DuckIcon aria-describedby={id} ref={duckEl} style={{  transform: 'rotateY(180deg)' }} />
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl || null} placement='left'>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
          The content of the Popper.
        </Box>
      </Popper>
    </Box>
  )
}

 
export default AnalysisPopper;
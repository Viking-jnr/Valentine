import React, { useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

// Keyframe animations
const heartbeat = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: translateX(-50%) scale(1);
  }
  50% {
    transform: translateX(-50%) scale(1.1);
  }
`;

const float = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const show = keyframes`
  5% {
    transform: translateX(-50%) translateY(-90%);
  }
  20% {
    transform: translateX(-50%) translateY(-100%);
  }
  50% {
    transform: translateX(-50%) translateY(-80%);
  }
  75% {
    transform: translateX(-50%) translateY(-60%);
  }
  100% {
    transform: translateX(-50%) translateY(-40%);
  }
`;

// Styled components
const EnvelopeContainer = styled(Box)(({ isHovered }) => ({
  position: 'relative',
  width: '460px',
  height: '260px',
  background: '#b74c4c',
  borderRadius: '8px',
  cursor: 'pointer',
  filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))',
  transition: 'transform 0.3s ease',
  overflow: isHovered ? 'visible': 'hidden',
  '@media (max-width: 480px)': {
    width: '320px',
    height: '208px',
    transform: 'scale(0.85)',
  },
}));

const EnvelopeBody = styled(Box)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '180px',
  background: '#b74c4c',
  borderRadius: '0 0 8px 8px',
  zIndex: 2,
  '@media (max-width: 480px)': {
    height: '144px',
  },
});

const EnvelopeLid = styled(Box)(({ isHovered }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  borderLeft: '230px solid transparent',
  borderRight: '230px solid transparent',
  borderTop: '130px solid #743333',
  transformOrigin: 'top center',
  transition: 'transform 0.8s ease',
  zIndex: 3,
  transform: isHovered ? 'rotateX(180deg)' : 'none',
  '@media (max-width: 480px)': {
    borderLeft: '160px solid transparent',
    borderRight: '160px solid transparent',
    borderTop: '104px solid #743333',
  },
}));

const HeartSeal = styled(Box)(({ isHovered }) => ({
  position: 'absolute',
  top: '65px',
  left: '50%',
  transform: isHovered
    ? 'translateX(-50%) translateY(-20px) scale(0.8)'
    : 'translateX(-50%)',
  fontSize: '2rem',
  zIndex: 6,
  animation: `${pulse} 2s infinite`,
  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
  transition: 'transform 0.8s ease',
  opacity: isHovered ? 0 : 1,
}));

const CardWrapper = styled(Box)(({ isHovered }) => ({
  position: 'absolute',
  top: 0,
  left: '50%',
  animation: isHovered ? `${show} 0.8s forwards` : 'none',
  transform: 'translateX(-50%) translateY(0%)',
  width: '90%',
  transition: 'transform 5s ease',
  zIndex: isHovered ? 10 : 1,
  opacity: 1,
  '@media (max-width: 480px)': {
    width: '280px',
    transform: isHovered
      ? 'translateX(-50%) translateY(-240px)'
      : 'translateX(-50%) translateY(50%)',
  },
}));

const Card = styled(Paper)({
  background: '#fff',
  borderRadius: '8px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  overflow: 'hidden',
});

const CardCover = styled(Box)({
  background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
  padding: '40px 20px',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '"💕 💖 💗 💝"',
    position: 'absolute',
    top: '10px',
    left: 0,
    right: 0,
    fontSize: '24px',
    opacity: 0.2,
    animation: `${float} 15s infinite linear`,
  },
});

const CardTitleSecondary = styled(Typography)({
  display: 'block',
  fontSize: '20px',
  color: '#e91e63',
  fontWeight: 300,
  textTransform: 'uppercase',
  letterSpacing: '3px',
});

const CardTitleMain = styled(Typography)({
  display: 'block',
  fontSize: '48px',
  color: '#c2185b',
  fontWeight: 'bold',
  margin: '10px 0',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
  '@media (max-width: 480px)': {
    fontSize: '38px',
  },
});

const CardTitleApostrophe = styled('span')({
  display: 'inline-block',
  animation: `${heartbeat} 1.5s infinite`,
});

const CardBody = styled(Box)(({ isHovered }) => ({
  padding: '30px',
  color: '#333',
  lineHeight: 1.8,
  fontSize: '15px',
  opacity: isHovered ? 1 : 0,
  display: isHovered ? 'block' : 'hidden',
  transition: 'opacity 0.5s ease 0.8s',
  '& p': {
    marginBottom: '14px',
  },
  '& p:first-of-type': {
    fontWeight: 'bold',
    color: '#e91e63',
    fontSize: '17px',
    marginBottom: '20px',
  },
  '& p:last-child': {
    textAlign: 'right',
    fontStyle: 'italic',
    color: '#c2185b',
    marginTop: '20px',
    fontWeight: 600,
  },
}));

const Instruction = styled(Typography)({
  position: 'fixed',
  bottom: '30px',
  left: '50%',
  transform: 'translateX(-50%)',
  color: 'white',
  fontSize: '14px',
  opacity: 0.8,
  textAlign: 'center',
  fontFamily: "'Arial', sans-serif",
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
  zIndex: 0,
});

const ValentineCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <EnvelopeContainer
        isHovered={isHovered}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <EnvelopeBody />
        <EnvelopeLid isHovered={isHovered} />
        <HeartSeal isHovered={isHovered}>💌</HeartSeal>
        <CardWrapper isHovered={isHovered}>
          <Card elevation={3}>
            <CardCover>
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <CardTitleSecondary>Happy</CardTitleSecondary>
                <CardTitleMain>
                  Valentine{' '}
                  <CardTitleApostrophe>💖</CardTitleApostrophe>
                </CardTitleMain>
                <CardTitleSecondary>Day</CardTitleSecondary>
              </Box>
            </CardCover>
            <CardBody isHovered={isHovered}>
              <p>To my Best Friend,</p>
              <p>
                Eyaa najua inakaa ufala lakini sina anything better ya kufanya 😅 
                We jua unapendwa n' you are a real one 😘😘❤️❤️
              </p>
              <p>Happy Valentine's Day!</p>
            </CardBody>
          </Card>
        </CardWrapper>
      </EnvelopeContainer>
      <Instruction>Hover over the envelope to open 💝</Instruction>
    </>
  );
};

export default ValentineCard;

import styled from "vue-styled-components";

export const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  text-transform: capitalize;
`;

export const CardContainer = styled.div`
  text-align: center;
`;

export const CardImage = styled.img`
  border-radius: 8px;
`;

export const CardTitle = styled.h1`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const CardSubtitle = styled.h3`
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 5px;
  font-weight: normal;
`;

export const CardPhone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const CardMail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingContent = styled.section`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.6);
  top: 0;
  left: 0;
`;

export const LoaderBox = styled.div`
  color: #ffffff;
  font-size: 90px;
  text-indent: -9999em;
  overflow: hidden;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  margin: 72px auto;
  position: relative;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;
  animation: load6 1.7s infinite ease, round 1.7s infinite ease;
`;
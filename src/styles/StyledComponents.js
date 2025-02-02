import styled, { keyframes } from "styled-components";

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 1.2rem;
  color: #007bff;

  &::after {
    content: "";
    width: 40px;
    height: 40px;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top-color: #007bff;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
  }
`;
export const ContainerFuild = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f6;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;

  img {
    width: 140px;
    height: 140px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
  }
`;

export const SearchInput = styled.input`
  padding: 12px 8px;
  border-radius: 25px;
  border: 1px solid #ccc;
  background: white;
  padding-left: 30px;
  width: 200px;
`;

export const SearchIcon = styled.span`
  position: absolute;
  right: 14px;
  top: 10px;
  font-size: 16px;
  cursor: pointer;
`;

export const Button = styled.button`
  background-color: white;
  border-radius: 10px;
  padding: 10px 14px;
  border: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #f6f6f6;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const ForecastRow = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ForecastCard = styled.div`
  background: white;
  padding: 12px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  p {
    margin: 5px;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-weight: bold;
`;

export const SubTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;

export const Icon = styled.img`
  width: 60px;
  height: 60px;
`;

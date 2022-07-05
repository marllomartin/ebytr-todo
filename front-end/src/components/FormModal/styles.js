import styled from 'styled-components';

import { IoClose, IoCheckmark } from 'react-icons/io5';

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: #ffffff;
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 480px;
  padding: 35px 50px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 40px;

  color: #1e1e1e;
  background-color: transparent;
  padding: 0;
  margin-bottom: 20px;

  font-size: 40px;

  button {
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background: #E2E0CA;
    cursor: pointer;

    transition: 0.5s;

    :hover {
      background-color: #a83935;

      svg {
        transition: 0.5s;
        color: #ffffff;
      }
    }
  }
`;
export const FormContainer = styled.form`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 90px;
`;

export const FormMain = styled.main`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 30px;

  label {
    font-size: 18px;
  }

  input {
    border: none;
    color: #1e1e1e;
    background-color: #E2E0CA;
    border-radius: 30px;

    height: 40px;
    width: 100%;
    padding-left: 10px;
  }
  select {
    border: none;
    color: #1e1e1e;
    background-color: #E2E0CA;
    border-radius: 30px;

    height: 40px;
    width: 100%;
    padding-left: 10px;
  }
  option {
    color: #1e1e1e;
    background-color: #E2E0CA;
  }
`;
export const Footer = styled.div`
  display: flex;
  justify-content: center;

  button {
    align-self: center;
    background-color: #559966;
    border: none;
    border-radius: 6px;
    width: 170px;
    height: 40px;
    font-weight: 700;
    cursor: pointer;
    margin-bottom: 10px;

    transition: 0.5s;

    &:hover {
      background-color: #457c53;
    }
  }
`;

export const CloseIcon = styled(IoClose)`
  margin-top: 2px;
  width: 2em;
  height: 2em;
`;
export const CheckIcon = styled(IoCheckmark)`
  color: white;
  width: 2.4em;
  height: 2.4em;
`;

import styled from 'styled-components'

export const StyledSwitch = styled.div`
  background-color: #333333;
  border: 0;
  padding: 3px;
  font-size: 12px;
  width: 48px;
  height: 25px;
  display: flex;
  justify-content: space-around;
  border-radius: 10000px;
  position: relative;

  label {
    width: 50px;
  }

  span {
    display: inline-flex;
    width: 20px;
    height: 20px;
    align-items: center;
    justify-content: center;
  }

  label:before {
    content: '';
    background-color: #fafafa;
    border: 1px solid #333333;
    width: 21px;
    height: 21px;
    border-radius: 100%;
    position: absolute;
    top: 1.2px;
    left: 1.2px;
    transition: 0.3s;
    cursor: pointer;
  }

  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox']:checked + label:before {
    transform: translateX(100%);
  }
`

import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  height: 225px;
  box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;

  margin: 20px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  opcacity: ${ props => props.done ? 0.5 : 1 };

  &:hover {
    opacity: 0.50;
  }


`

export const TopCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: absolute;
  top: 10px;
  width: 90%;
  height: 185px;
  
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;

  img {
    position: absolute;
    top: 0;
  }

  h3 {
    position: absolute;
    text-align: center;
    top: 100px;

  }


`

export const BottomCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  position: absolute;
  bottom: 10px;

  strong {
    color: #EE6B26;
    font-weight: bold;
  }
  span {
    color: #707070;
  }

`
import styled from "styled-components"
import { Gray, Green, Orange, Purple } from "../../global.styled"

export const CardMainColumn = styled.div`

`

export const Cards = styled.div`
  width: 100%;
  display: block;
  position: relative;
`

export const CardColumnTitle = styled.div`

`

export const CardsItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`

export const CardDiv = styled.div`
  width: 220px;
  height: 130px;
  background-color: #FFFFFF;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CardTheme = styled.div`
${(props)=> props.$color === "_orange" ? Orange : null}
${(props)=> props.$color === "_green" ? Green : null}
${(props)=> props.$color === "_purple" ? Purple : null}
${(props)=> props.$color === "_gray" ? Gray : null}
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
`
export const CardName = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
  margin: 0;
`

export const CardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
`
export const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #94A6BE;
`

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
  width: 13px;
  }

  p {
  margin-left: 6px;
  font-size: 10px;
  line-height: 13px;
  color: #94A6BE;
  letter-spacing: 0.2px;
  }
`
import styled from 'styled-components'

export const StyledMenu = styled.header`
   display: flex;
   width: 100%;
   height: 56px;
   padding: 0 20px;
   justify-content: space-between;
   align-items: center;
   background-color: ${({ theme }) => theme.backgroundLevel1 || '#FFFFFF'};
   gap: 16px;
   position: fixed;

   .logo {
      width: 100%;
      max-width: 127px;

      .text {
         fill: ${({ theme }) => theme.textColorBase || '#222222'};
      }
   }
`

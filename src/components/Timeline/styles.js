import styled from 'styled-components'

export const StyledTimeline = styled.div`
   width: 100%;
   padding: 20px;

   h2 {
      font-size: 16px;
      margin-bottom: 16px;
      text-transform: capitalize;
   }

   img {
      aspect-ratio: 16/9;
      object-fit: cover;
      width: 100%;
      height: auto;
      border-radius: 10px;

      &:hover {
         transition: ease-in-out 0.2s 1.2s;
         transform: scale(1.18);
      }
   }

   section {
      width: 100%;
      margin-bottom: 30px;

      div {
         /* width: calc(100vw - 16px * 4); */
         width: 100%;
         display: grid;
         grid-gap: 16px;
         grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

         a {
            text-align: center;

            span {
               padding-top: 8px;
               font-size: 0.8rem;
               font-weight: 600;
               text-align: start;
               display: block;
               color: ${({ theme }) => theme.textColorBase || '#222222'};
            }
         }
      }
   }
`

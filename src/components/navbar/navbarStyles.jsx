import styled from "styled-components"

export const NavbarContainer = styled.div`
  height: 50px;
  border-bottom: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #555;

  .wrapper {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .search {
      display: flex;
      align-items: center;
      gap: 0.2rem;
      border: 0.5px solid lightgray;

      input {
        border: none;
        outline: none;
        padding: 5px;
        background: transparent;

        &::placeholder {
          font-size: 12px;
        }
      }

      .icon {
        margin-right: 5px;
      }
    }

    .items {
      display: flex;
      align-items: center;
      .item {
        display: flex;
        align-items: center;
        margin-right: 20px;

        .avatar {
          width: 30px;
          height: 30px;
          border-radius: 50px;
        }
      }
    }
  }
`

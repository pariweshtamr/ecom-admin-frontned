import styled from "styled-components"

export const SidebarContainer = styled.div`
  flex: 1;
  border-right: 0.5px solid lightgray;
  min-height: 100vh;
  background-color: white;

  .top {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 0.5px solid lightgray;

    .logo {
      font-size: 20px;
      font-weight: bold;
      color: #6439ff;
    }
  }

  .center {
    padding-left: 20px;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      .title {
        font-size: 12px;
        font-weight: bold;
        color: gray;
        margin: 15px 0 5px 0;
      }
      li {
        display: flex;
        align-items: center;
        padding: 5px;
        cursor: pointer;
        gap: 10px;

        &:hover {
          background-color: #ece8ff;
        }

        .icon {
          font-size: 20px;
          color: #7451f8;
        }

        span {
          font-size: 14px;
          font-weight: 500;
          color: #888;
        }
      }
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    margin: 20px;

    .color-option {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      cursor: pointer;
      border: 1px solid #7451f8;
      margin: 5px;

      &:nth-child(1) {
        background-color: whitesmoke;
      }

      &:nth-child(2) {
        background-color: #333;
      }
    }
  }
`

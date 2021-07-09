import { gql } from "@apollo/react-hooks";

export const SEND_EMAIL = gql`
  mutation SendEmail($input: EmailInput!) {
    sendEmail(input: $input) {
      success
      message
      error
    }
  }
`;

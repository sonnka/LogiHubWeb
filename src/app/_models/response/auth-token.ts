export class AuthToken {
  access_token: string;
  token_type: string;
  expires_in: bigint;

  constructor(access_token: string, token_type: string, expires_in: bigint) {
    this.access_token = access_token;
    this.token_type = token_type;
    this.expires_in = expires_in;
  }
}

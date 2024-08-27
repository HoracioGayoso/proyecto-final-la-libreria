// src/types/express/index.d.ts
import express from "express";

export interface DecodedIdToken {
    uid: string;
    email: string;
    // Other properties
}

declare global {
  namespace Express {
    interface Request {
      user?: DecodedIdToken;
    }
  }
}
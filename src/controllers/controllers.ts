import express, { Express, Request, Response } from 'express';


export const indexController = (req: Request, res: Response) => {
    console.log("H1")
    res.render("pages/index")
  }
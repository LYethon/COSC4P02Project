CREATE TABLE [dbo].[courseTable] (
    [CID]                 INT         NOT NULL,
    [Name]                VARCHAR (100)  NOT NULL,
    [Code]                VARCHAR (15)   NOT NULL,
    [Subject]             VARCHAR (10)   NOT NULL,
    [AlternativeSubject1] VARCHAR (10)   NULL,
    [AlternativeSubject2] VARCHAR (10)   NULL,
    [Description]         VARCHAR (2000) NOT NULL,
    [CreditValue]         FLOAT (53)  NOT NULL,
    [Prerequisites]       VARCHAR (100)  NULL,
    [Context]             VARCHAR (100)  NULL,
    PRIMARY KEY CLUSTERED ([CID] ASC)
);


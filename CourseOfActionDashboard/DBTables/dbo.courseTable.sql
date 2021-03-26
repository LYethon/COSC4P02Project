CREATE TABLE [dbo].[courseTable] (
    [CID]                 INT         NOT NULL,
    [Name]                CHAR (100)  NOT NULL,
    [Code]                CHAR (15)   NOT NULL,
    [Subject]             CHAR (10)   NOT NULL,
    [AlternativeSubject1] CHAR (10)   NULL,
    [AlternativeSubject2] CHAR (10)   NULL,
    [Description]         CHAR (2000) NOT NULL,
    [CreditValue]         FLOAT (53)  NOT NULL,
    [Prerequisites]       CHAR (100)  NULL,
    [Context]             CHAR (100)  NULL,
    PRIMARY KEY CLUSTERED ([CID] ASC)
);


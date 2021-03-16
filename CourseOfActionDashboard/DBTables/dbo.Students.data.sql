SET IDENTITY_INSERT [dbo].[Students] ON
INSERT INTO [dbo].[Students] ([Id], [FirstName], [LastName], [Email], [Password], [Schedule]) VALUES (1, N'David', N'Saldana', N'ds16vx@brocku.ca', N'abc', N'No Schedule')
INSERT INTO [dbo].[Students] ([Id], [FirstName], [LastName], [Email], [Password], [Schedule]) VALUES (2, N'Liam', N'Yethon', N'idkyouremail@brocku.ca', N'123', N'No Schedule')
SET IDENTITY_INSERT [dbo].[Students] OFF

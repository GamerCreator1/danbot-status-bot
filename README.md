# DanBot Hosting Status Bot
> DanBot Hosting Status Bot is a bot that monitors status for all status from node 1 to node 6, and the misc status, including lava status, mail, rproxy, panel and animalapi.

## Table of contents
* [Setup](#setup)
* [Coming Soon](#coming-soon)

## Setup
1. Download the project
2. Install all necessary packages with `npm i`
3. Fill out the .env file with the necessary information [here](#.env-meaning)
4. Run the bot with `node .`

## .env Meaning
| Name  | Description | Required | Default |
| ------------- | :-------------: | :-------------: |:-------------:|
| TOKEN      |The token that power the bot up, found in developer page | true | PUTDISCORDTOKENHERE |
| CHANNELID     | Required if message id is provided    | false (unless read left) | PUTDISCORDCHANNELIDHERE |
| MESSAGEID     | Edit the message so status can show up `CHANNELID NEEDED` if this is provided    | false (unless read left) | PUTDISCORDMESSAGEIDHERE |
| PREFIX | To use bot commands | true | `>`
## Code Examples
Default prefix is `>` if your prefix is different, change `>` with your prefix

`>help` - All bot command that bot might have
`>status` - Send current status to the channel

## Coming Soon
* Nothing yet. lol

##### Notes: This bot is intented and used for only one server, as of currently

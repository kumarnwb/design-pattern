# Design Patterns implemented in Typescript with examples and links

The purpose of this repository is to provide a one-stop solution for all the design patterns implemented in Typescript.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing
purposes.

### Prerequisites

What things you need to install software and how to install them.

### Install NodeJS on Ubuntu

You can successfully add Node.js PPA to Ubuntu system. Now execute the below command install Node on and Ubuntu using
apt-get

```
$ sudo apt-get install curl python-software-properties
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
$ sudo apt-get install nodejs 
```

### Install NodeJS on Mac

Installing Node.js and NPM is pretty straightforward using Homebrew. Homebrew handles downloading, unpacking and
installing Node and NPM on your system

```
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew install node
```

### Install NodeJS on windows

Download latest LTS version from https://nodejs.org/en/download/

### Installing

Start by cloning this project

```
git clone https://github.com/kumarnwb/design-pattern.git
```

### Next we need is to install all dependencies of the project

```
cd ./design-pattern
npm install 
```

### Running the App

This repositories have multiple directories with a single index.ts file exporting everything that needs to be exported
from that directory.
To run a specific design pattern locally read the ```README.md``` file in that directory for details related to
instantiation and setup.

import the content of directory into root folder ```index.ts``` file and run the below command.

```
# starts the local server
npm start
```
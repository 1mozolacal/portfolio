import React, { useRef } from "react"

import GenericProject from "../../components/genericProjectPage.js"

const SalonEverywherePage = () => {
  const mainText = [
    [
      "The Challenge",
      "To take a public dataset and extract desired fields from it about a specific person. I.E. using an instrgram handle scan through the provided account and post data to determine things like location and salon services that they may provide.",
    ],
    [
      "My Approch",
      "The dataset that I was provided with was large, in surplus of a gigabyte. Thus for storage and quick lookup, I decided on using a database. I pulled all the useful data columns, re-created the tables, and linked them via user_ids. I wrote a python script to read the dataset line by line and push it up to the database. With the populated database, I wrote an additional python script that queried the database and derived the required information.",
    ],
    [
      "Database",
      "The reason why I choose to use a database is primarily due to the size of the dataset but also because of its format. It was a massive CSV file that had columns like user.pk which tipped me off that this was a database dump. I opted for MySQL as it is free-ware with more than sufficient power for what I need. I created 3 tables; location, user, and post. Most of the information was in the user table, a bit was in the location table, and the post table was a table that linked a user and location to the post content. I then created a few views because I can to the realization that the vast majority of the post data was not usable(there was no reference user).",
    ],
    [
      "Data Analysis",
      "Given an Instagram handle, I would find information such as if it is a personal or business account, name of business or person, email, phone number, website, city, country, postal code, and a list of services that the person or business offered (hair styling, nails, spa, haircut, colouring). Some of the fields could be directly found it but others like the location data and services list had to be derivated. For the location data, I used geopy which is a geographical library that has the ability to provided city, postal, and country information of a latitude-longitude point. For the services, I used a word filter off fields like their name, bio, category ... etc.",
    ],
    [
      "Next Steps",
      "There are many areas that I could still have improved this project. From a data cleaning perspective, there are many symbols that people use that look visually similar to the alphabet but wildly different ASCII codes(emojis and such). Currently, I am discarding any character which lies outside of the alphabet but in the future, I would like to convert these 'latex like' symbols to their approach alphabet representation. From a data parsing/analysis perspective, I would like to have a weighting for confidence and use more complex natural language parsing techniques like using the python tool kit NLTK in conjunction with a neural network.",
    ],
  ]
  const bannerRef = useRef(
    "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hair_Salon_Stations.jpg"
  )
  return (
    <GenericProject
      bannerImage={bannerRef}
      title="Data Science Challenge"
      text={mainText}
      git="https://github.com/1mozolacal/DataScienceChallengeSaloneverywhere"
    ></GenericProject>
  )
}

export default SalonEverywherePage

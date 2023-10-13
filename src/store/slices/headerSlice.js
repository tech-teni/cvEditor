import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  surname: {
    fontsize: "30px",
    fontFamily: "open sans",
    color: "black",
    selected: false,
  },
  firstname: {
    fontsize: "30px",
    fontFamily: "open sans",
    color: "black",
    selected: false,
  },
  phone: {
    fontsize: "15px",
    fontFamily: "open sans",
    color: "black",
    selected: false,
  },
  email1: {
    fontsize: "15px",
    fontFamily: "open sans",
    color: "black",
    selected: false,
  },
  email2: {
    fontsize: "15px",
    fontFamily: "open sans",
    color: "black",
    selected: false,
  },
  address: {
    fontsize: "15px",
    fontFamily: "open sans",
    color: "black",
    selected: false,
  },

  Stitle: {
    fontsize: "18px",
    fontFamily: "open sans",
    color: "black",
    selected: false,
    fontweight: "bold",
  },
  parasummary: {
    fontsize: "15px",
    fontFamily: "open sans",
    color: "black",
    selected: false,
  },
  Sktitle: {
    fontsize: "15px",
    fontFamily: "open sans",
    color: "black",
    selected: false,
  },
  skills: {
    skills: [
      {
        text: "P&L Management",
        fontsize: "18px",
        fontFamily: "open sans",
        color: "black",
        selected: false,
        fontweight: "bold",
      },
      {
        text: "P&L Management",
        fontsize: "18px",
        fontFamily: "open sans",
        color: "black",
        selected: false,
        fontweight: "bold",
      },
      {
        text: "P&L Management",
        fontsize: "18px",
        fontFamily: "open sans",
        color: "black",
        selected: false,
        fontweight: "bold",
      },
      {
        text: "P&L Management",
        fontsize: "18px",
        fontFamily: "open sans",
        color: "black",
        selected: false,
        fontweight: "bold",
      },
      {
        text: "P&L Management",
        fontsize: "18px",
        fontFamily: "open sans",
        color: "black",
        selected: false,
        fontweight: "bold",
      },
      {
        text: "P&L Management",
        fontsize: "18px",
        fontFamily: "open sans",
        color: "black",
        selected: false,
        fontweight: "bold",
      },
      {
        text: "P&L Management",
        fontsize: "18px",
        fontFamily: "open sans",
        color: "black",
        selected: false,
        fontweight: "bold",
      },
      {
        text: "P&L Management",
        fontsize: "18px",
        fontFamily: "open sans",
        color: "black",
        selected: false,
        fontweight: "bold",
      },
      {
        text: "P&L Management",
        fontsize: "18px",
        fontFamily: "open sans",
        color: "black",
        selected: false,
        fontweight: "bold",
      },
    ],
  },

  Etitle: {
    fontsize: "15px",
    fontFamily: "open sans",
    color: "black",
    selected: false,
  },

  experiences: [
    {
      company: {
        text: "Arowwai Industries",
        fontsize: "18px",
        fontFamily: "open sans",
        color: "black",
        selected: false,
        fontweight: "bold",
      },
      time: {
        text: "Oct 2020 - Present",
        fontsize: "18px",
        fontFamily: "open sans",
        color: "black",
        selected: false,
        fontweight: "bold",
      },
      designation: {
        text: "Operations Manager ",
        fontsize: "18px",
        fontFamily: "open sans",
        color: "black",
        selected: false,
        fontweight: "bold",
      },

      summary: {
        text: "Lead nation-wide operations, achieving growth of 120% in two years. Spearheaded the development and implementation of subscription video-on-demand over-the-top streaming products. Improved employee retention by adopting a new internal communications methodology and restructured employee benefits.",

        fontsize: "18px",
        fontFamily: "open sans",
        color: "black",
        selected: false,
        fontweight: "bold",
      },

      accomplishmentTitle: {
        text: "Accomplishments",

        fontsize: "18px",
        fontFamily: "open sans",
        color: "black",
        selected: false,
        fontweight: "bold",
      },
      task: [
        {
          text: "Sorry, I cannot summarise this content as it is a collection of random Latin phrases and sentences that do not form a coherent text",
          fontsize: "18px",
          fontFamily: "open sans",
          color: "black",
          selected: false,
          fontweight: "bold",
        },
        {
          text: "It appears that the content you provided is not a complete passage of text, but rather a collection of random Latin phrases and sentences. While Latin can be a fascinating language to study, it may not be helpful for our current purposes if it does not form a coherent message. If you have any other text that you would like me to work on, please feel free to provide it and I will do my best to assist you.",
          fontsize: "18px",
          fontFamily: "open sans",
          color: "black",
          selected: false,
          fontweight: "bold",
        },
      ],

      fontsize: "18px",
      fontFamily: "open sans",
      color: "black",
      selected: false,
      fontweight: "bold",
    },
    {
      company: {
        text: "Arowwai Industries",
        fontsize: "18px",
        fontFamily: "open sans",
        color: "black",
        selected: false,
        fontweight: "bold",
      },
      time: {
        text: "Oct 2020 - Present",
        fontsize: "18px",
        fontFamily: "open sans",
        color: "black",
        selected: false,
        fontweight: "bold",
      },
      designation: {
        text: "Operations Manager ",
        fontsize: "18px",
        fontFamily: "open sans",
        color: "black",
        selected: false,
        fontweight: "bold",
      },

      summary: {
        text: "Lead nation-wide operations, achieving growth of 120% in two years. Spearheaded the development and implementation of subscription video-on-demand over-the-top streaming products. Improved employee retention by adopting a new internal communications methodology and restructured employee benefits.",

        fontsize: "18px",
        fontFamily: "open sans",
        color: "black",
        selected: false,
        fontweight: "bold",
      },

      accomplishmentTitle: {
        text: "Accomplishments",

        fontsize: "18px",
        fontFamily: "open sans",
        color: "black",
        selected: false,
        fontweight: "bold",
      },
      task: [
        {
          text: "Sorry, I cannot summarise this content as it is a collection of random Latin phrases and sentences that do not form a coherent text",
          fontsize: "18px",
          fontFamily: "open sans",
          color: "black",
          selected: false,
          fontweight: "bold",
        },
        {
          text: "It appears that the content you provided is not a complete passage of text, but rather a collection of random Latin phrases and sentences. While Latin can be a fascinating language to study, it may not be helpful for our current purposes if it does not form a coherent message. If you have any other text that you would like me to work on, please feel free to provide it and I will do my best to assist you.",
          fontsize: "18px",
          fontFamily: "open sans",
          color: "black",
          selected: false,
          fontweight: "bold",
        },
      ],
    },
  ],
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    editSkillsText: (state, action) => {
      let theSelected = state.skills.skills.map((each, index) => {
        if (index === action.payload.id) {
          console.log(index, action.payload.id);
          console.log(action.payload.text);

          return (state.skills.skills[index].text = action.payload.text);
        }
      });
    },
    editexperienceText: (state, action) => {
      let theSelected = state.experiences.map((each, index) => {
        if (index + "c" === action.payload.innerid) {
          return (state.experiences[index].company.text = action.payload.text);
        } else if (index + "t" === action.payload.innerid) {
          return (state.experiences[index].time.text = action.payload.text);
        } else if (index + "d" === action.payload.innerid) {
          return (state.experiences[index].designation.text =
            action.payload.text);
        } else if (index + "s" === action.payload.innerid) {
          return (state.experiences[index].summary.text = action.payload.text);
        } else if (index + "a" === action.payload.innerid) {
          return (state.experiences[index].accomplishmentTitle.text =
            action.payload.text);
        } else {
          state.experiences[index].task.map((each, indexx) => {
            console.log("thhhhiffff", index, indexx, action.payload.innerid);
            if (index + "l" + indexx === action.payload.innerid) {
              return (state.experiences[index].task[indexx].text =
                action.payload.text);
            }
          });
        }
      });
    },
    editHeader: (state, action) => {
      if (action.payload.type === "s") {
        // state.surname.selected=
      } else if (action.payload.type === "f") {
      }
    },
    getselected: (state, action) => {
      console.log(action);
      console.log("testinggggg");

      if (action.payload.type === "s" || action.payload.id === "01") {
        console.log("========>>>>", "prevoius", state.surname, "latest", {
          ...state.surname,
          ...action.payload.info,
        });
        state.surname = { ...state.surname, ...action.payload.info };
      } else if (action.payload.type === "f" || action.payload.id === "02") {
        state.firstname = { ...state.firstname, ...action.payload.info };
      } else if (action.payload.type === "p" || action.payload.id === "03") {
        state.phone = { ...state.phone, ...action.payload.info };
      } else if (action.payload.type === "e1" || action.payload.id === "04") {
        state.email1 = { ...state.email1, ...action.payload.info };
      } else if (action.payload.type === "e2" || action.payload.id === "05") {
        state.email2 = { ...state.email2, ...action.payload.info };
      } else if (action.payload.type === "ad" || action.payload.id === "06") {
        state.address = { ...state.address, ...action.payload.info };
      } else if (action.payload.type === "ad" || action.payload.id === "06") {
        state.address = { ...state.address, ...action.payload.info };
      } else if (action.payload.type === "st" || action.payload.id === "07") {
        state.Stitle = { ...state.Stitle, ...action.payload.info };
      } else if (action.payload.type === "sp" || action.payload.id === "08") {
        state.parasummary = { ...state.parasummary, ...action.payload.info };
      } else if (action.payload.type === "skt" || action.payload.id === "09") {
        state.Sktitle = { ...state.Sktitle, ...action.payload.info };
      } else if (action.payload.type === "skl" || action.payload.id === "10") {
        let theSelected = state.skills.skills.map((each, index) => {
          console.log("10" + index, action.payload.listID);

          if ("10" + index === action.payload.listID) {
            return (state.skills.skills[index] = {
              ...state.skills.skills[index],
              ...action.payload.info,
            });
          }
        });

        console.log(theSelected);
      } else if (action.payload.type === "et" || action.payload.id === "11") {
        state.Etitle = { ...state.Etitle, ...action.payload.info };
      } else if (action.payload.type === "el" || action.payload.id === "12") {
        let theSelected = state.experiences.map((each, index) => {
          console.log(
            "10" + index,
            action?.payload.listID[0],
            action?.payload.listID[1],
            action?.payload.listID[2]
          );
          console.log(action?.payload);
          if (
            "10" + index ===
            action.payload.listID[0] +
              action.payload.listID[1] +
              action.payload.listID[2]
          ) {
            if ("10" + index + "h" === action.payload.listID) {
              return (state.experiences[index].company = {
                ...state.experiences[index].company,
                ...action.payload.info,
              });
            } else if ("10" + index + "t" === action.payload.listID) {
              return (state.experiences[index].time = {
                ...state.experiences[index].time,
                ...action.payload.info,
              });
            } else if ("10" + index + "d" === action.payload.listID) {
              return (state.experiences[index].designation = {
                ...state.experiences[index].designation,
                ...action.payload.info,
              });
            } else if ("10" + index + "s" === action.payload.listID) {
              return (state.experiences[index].summary = {
                ...state.experiences[index].summary,
                ...action.payload.info,
              });
            } else if ("10" + index + "a" === action.payload.listID) {
              return (state.experiences[index].accomplishmentTitle = {
                ...state.experiences[index].accomplishmentTitle,
                ...action.payload.info,
              });
            } else {
              let theSelected = state.experiences[index].task.map(
                (eachh, indexx) => {
                  console.log("10" + index, action.payload.listID);

                  if ("10" + index + indexx === action.payload.listID) {
                    return (state.experiences[index].task[indexx] = {
                      ...state.experiences[index].task[indexx],
                      ...action.payload.info,
                    });
                  }
                }
              );
            }
          }
        });
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { editHeader, getselected, editSkillsText, editexperienceText } =
  headerSlice.actions;

export default headerSlice.reducer;

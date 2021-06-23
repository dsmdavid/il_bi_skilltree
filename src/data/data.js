import { SkillType } from "beautiful-skill-tree";

import ideIcon from './Ideicon.svg';
import tableauIcon from './Tableauicon.svg';
import windowIcon from './Windowicon.svg';
import calculateIcon from './Calculateicon.svg';
import lodIcon from './Lodicon.svg';
import excludeIcon from './Excludeicon.svg';
import parameterIcon from './Parametericon.svg';
import setIcon from './Seticon.svg';
import tableauactionIcon from './Tableauactionicon.svg';
import tableauserverIcon from './Tableauservericon.svg';
import tableauprojectIcon from './Tableauprojecticon.svg';
import tableaupermissionIcon from './Tableaupermissionicon.svg';
import tableauscheduleIcon from './Tableauscheduleicon.svg';
import tableaucontentIcon from './Tableaucontenticon.svg';
import tableauadminIcon from './Tableauadminicon.svg';
import tableauapiIcon from './Tableauapiicon.svg';
import tableaurestapiIcon from './Tableaurestapiicon.svg';
import tableauserverclientIcon from './Tableauserverclienticon.svg';
import tableauautomateIcon from './Tableauautomateicon.svg';
import tableaudocumentIcon from './Tableaudocumenticon.svg';
import tableaumetadataIcon from './Tableaumetadataicon.svg';
import tableauwebhookIcon from './Tableauwebhookicon.svg';

export const tableau: SkillType = [
  {
    id: "tableaudesktop",
    icon: tableauIcon,
    title: "Tableau Desktop",
    tooltipDescription:
      "Your tool to start creating content",
    children: [
      {
        id: "basiccalcs",
        icon: calculateIcon,
        title: "Calculated Fields",
        tooltipDescription:
          "Your own calculations in the workbook",
        children: [
          {
            id: "tablecalcs",
            icon: windowIcon,
            title: "Table Calculations",
            tooltipDescription:
              "Window functions in Tableau",
            children: [
            ]
          },
          {
            id: "lodcalcs",
            icon: lodIcon,
            title: "LOD",
            tooltipDescription:
              "Level of detail calculations introduce elements not in the view",
            children: [
              {
                id: "includeLOD",
                icon: excludeIcon,
                title: "Include/Exclude",
                tooltipDescription:
                  "Advance",
                children: [
                ]
              }
            ]
          }
        ]
      }
      ,
      {
        id: "parameter",
        icon: parameterIcon,
        title: "Parameters",
        tooltipDescription:
          "Allow user inputs in the analysis by using parameters",
        children: [
          {
            id: "sets",
            icon: setIcon,
            title: "Sets",
            tooltipDescription:
              "Use sets to select items meeting a specific criteria",
            children: [
              {
                id: "actions",
                icon: tableauactionIcon,
                title: "Parameter and Sets Actions",
                tooltipDescription:
                  "Use actions to facilitate user interaction",
                children: [

                ]
              }
            ]
          }

        ]
      }

    ]
  },
  {
    id: "basicserver",
    icon: tableauserverIcon,
    title: "Tableau Server",
    tooltipDescription:
      "Your tool to share and govern Tableau",
    children: [
      {
        id: "tableaucontent",
        icon: tableaucontentIcon,
        title: "Content in Tableau Server",
        tooltipDescription:
          "Understand datasources, dashboards, views, subscriptions, users,...",
        children: [
          {
            id: "tableauschedules",
            icon: tableauscheduleIcon,
            title: "Schedules",
            tooltipDescription:
              "When should extracts be refreshed? What resources do we need?",
            children: []
          }
          ,
          {
            id: "tableauproject",
            icon: tableauprojectIcon,
            title: "Projects",
            tooltipDescription:
              "Basic unit of organization of content",
            children: [
              {
                id: "tableaupermission",
                icon: tableaupermissionIcon,
                title: "Permissions",
                tooltipDescription:
                  "Who is able to access what?\n Should they have access to this datasource? And this view?",
                children: [
                ]
              }

            ]
          }

        ]
      }
      ,
      {
        id: "tableauadmin",
        icon: tableauadminIcon,
        title: "Tableau Admin",
        tooltipDescription:
          "Infrastructure, backups, automation, while maintaining governance",
        children: [
          {
            id: "tableauautomate",
            icon: tableauautomateIcon,
            title: "Automate basic maintenance",
            tooltipDescription:
              "Automate backups, export ppt,... using tabcmd",
            children: []},
          {
            id: "tableauapi",
            icon: tableauapiIcon,
            title: "APIs",
            tooltipDescription:
              "Everything that you can do by dragging and dropping can be accomplished via API... But knowing which to use and when is an art.",
            children: [
              {
                id: "tableaurest",
                icon: tableaurestapiIcon,
                title: "Rest API",
                tooltipDescription:
                  "Controls almost all the settings in server. Download/upload workbooks, datasources,... create projects, users, grant permissions... the day-to-day power horse.",
                children: [
                  {
                    id: "tableauserverclient",
                    icon: tableauserverclientIcon,
                    title: "Tableau Server Client",
                    tooltipDescription:
                      "Use the TSC library to automate (Python) all your requests: https://tableau.github.io/server-client-python/docs/",
                    children: [
                    ]
                  }
                ]
              },
              {
                id: "tableaudocument",
                icon: tableaudocumentIcon,
                title: "Document API",
                tooltipDescription:
                  "Change datasources for existing workbooks, update credentials, get field information,...",
                children: [
                ]
              },
              {
                id: "tableaumetadata",
                icon: tableaumetadataIcon,
                title: "Metadata API",
                tooltipDescription:
                  "Get ready for a fun experience using the GraphQL.\nThe Tableau Metadata API discovers and indexes all of the content on your Tableau Online site or Tableau Server, including workbooks, data sources, flows, and metrics. \
                  * Discover data associated with content published to your Tableau Online site or your Tableau Server. \
                  * Track lineage: for example, identify which workbooks use a specific published data source. \n \
                  * Perform impact analysis: for example, find all worksheets that depend on a database table column or identify the authors you should notify when a data source change occurs.",
                children: [
                ]
              },
              {
                id: "tableauwebhook",
                icon: tableauwebhookIcon,
                title: "Webhook API",
                tooltipDescription:
                  " Webhooks enable Tableau events to send an HTTP POST notification to the web location of your choice. \
                  Use Cases: \
                  * Send an SMS whenever a data source refresh occurs. * Notify a web app to synchronize data when a workbook isc reated. \
                  e.g. Slack integration",
                children: [
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];


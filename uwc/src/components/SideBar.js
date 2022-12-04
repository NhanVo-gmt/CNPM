import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";

export const SideBar = [
    {
        title: 'Worker List',
        path: '/worker',
        icon: <AiIcons.AiOutlineUser />,
        class_name: 'nav-text'
    },
    {
        title: 'Vehicle List',
        path: '/vehicle',
        icon: <HiIcons.HiOutlineTruck />,
        class_name: 'nav-text'
    },
    {
        title: 'MCP List',
        path: '/mcp',
        icon: <BsIcons.BsHouseDoor />,
        class_name: 'nav-text'
    },
    {
        title: 'Create Route',
        path: '/mcp/planningRoute',
        icon: <AiIcons.AiOutlineSetting />,
        class_name: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/login',
        icon: <BiIcons.BiLogOut />,
        class_name: 'nav-text'
    }
]
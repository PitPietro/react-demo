import React from "react";
import BasicAlerts from "./BasicAlerts";
import LinkAlerts from "./LinkAlerts";
import AdditionalContentAlerts from "./AdditionalContentAlerts";
import DismissibleAlerts from "./DismissibleAlerts";
import Layout from "../../utils/layout";
import Title from "../../utils/titles/title";

export default function Alerts() {
    return (
        <Layout>
            <Title title="Alerts"/>
            <BasicAlerts/>
            <LinkAlerts/>
            <AdditionalContentAlerts/>
            <DismissibleAlerts/>
        </Layout>

    )
}
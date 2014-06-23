package com.enchoice;

import com.ibm.ecm.extension.Plugin;
import com.ibm.ecm.extension.PluginAction;
import java.util.Locale;

public class SamplePlugin extends Plugin {

    @Override
    public PluginAction[] getActions() {
        return new PluginAction[]{};
    }

    @Override
    public String getId() {
        return "SamplePlugin";
    }

    @Override
    public String getName(Locale locale) {
        return "A sample plugin for education purposes";
    }

    @Override
    public String getScript() {
        return "main.js";
    }

    @Override
    public String getVersion() {
        return "1.0-SNAPSHOT";
    }

    @Override
    public String getDojoModule() {
        return "sample-plugin";
    }

    @Override
    public String getCSSFileName() {
        return "main.css";
    }
}

package com.fileuploader;

import com.facebook.react.ReactActivity;

import com.filepicker.FilePickerPackage; // Lichwa/react-native-file-picker

public class MainActivity extends ReactActivity {

    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                new FilePickerPackage() // Add package
        );
    }

    @Override
    protected String getMainComponentName() {
        return "FileUploader";
    }

}

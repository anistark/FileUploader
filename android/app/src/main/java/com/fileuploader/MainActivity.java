package com.fileuploader;

import com.filepicker.FilePickerPackage; // Lichwa/react-native-file-picker
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    @Override
    protected String getMainComponentName() {
        return "FileUploader";
    }

//    @Override
//    protected List<ReactPackage> getPackages() {
//        return Arrays.<ReactPackage>asList(
//                new MainReactPackage(),
//                new FilePickerPackage() // Add package
//        );
//    }

}

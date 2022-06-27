/******************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright [2015] Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by all applicable intellectual 
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
******************************************************************************/

/**
 * @file  ApplicationFCMPublicIDs.h
 *
 * @brief This file contains the dictionary keys and GUIDs for all the required 
 *        interfaces that help you access the services that the interface provides.
 *        The definitions in this file are valid for CPSDK version 1.3 onwards 
 *        (or for 'Adobe Animate CC').
 */

#ifndef APPLICATION_FCM_PUBLIC_IDS_H_
#define APPLICATION_FCM_PUBLIC_IDS_H_

#include "FCMPreConfig.h"
#include "FCMTypes.h"


/* -------------------------------------------------- Forward Decl */


/* -------------------------------------------------- Enums */


/* -------------------------------------------------- Macros / Constants */

namespace DOM
{
    /**
      * @brief Defines the universally-unique service ID for a document service. 
      *        Use this service ID to get a pointer to the service interface
      *        "IFLADocService". 
      *
      * @note  Textual Representation: {CA4712E0-ED45-47A1-A335-EC1AD803D66C}
      */   
    static const FCM::SRVCID FLA_DOC_SERVICE = 
        {0xca4712e0, 0xed45, 0x47a1, {0xa3, 0x35, 0xec, 0x1a, 0xd8, 0x3, 0xd6, 0x6c}};
    
    
    /**
      * @brief Defines the universally-unique service ID for a bitmap service. 
      *        Use this service ID to get a pointer to the service interface 
      *        "IBitmapExportService". 
      *
      * @note  Textual Representation: {C173F86A-B39C-4154-8B8B-208F3CDDD16B}
      */
    static const FCM::SRVCID FLA_BITMAP_SERVICE =
        {0xc173f86a, 0xb39c, 0x4154, {0x8b, 0x8b, 0x20, 0x8f, 0x3c, 0xdd, 0xd1, 0x6b}};
    

    /**
      * @brief Defines the universally-unique service ID for a sound service. 
      *        Use this service ID to get a pointer to the service interface 
      *        "ISoundExportService". 
      *
      * @note  Textual Representation: {07331F3C-AA5F-49C7-80B9-28C0A2DF71FC}
      */
    static const FCM::SRVCID FLA_SOUND_SERVICE =
        {0x7331f3c, 0xaa5f, 0x49c7, {0x80, 0xb9, 0x28, 0xc0, 0xa2, 0xdf, 0x71, 0xfc}};


    /**
      * @brief Defines the universally-unique service ID for a shape region generator service. 
      *        Use this service ID to get a pointer to the service interface 
      *        "IRegionGeneratorService".
      *
      * @note  Textual Representation: {1664E1F9-AE6C-456F-9852-D83A10262776}
      */
    static const FCM::SRVCID FLA_REGION_GENERATOR_SERVICE = 
        {0x1664e1f9, 0xae6c, 0x456f, {0x98, 0x52, 0xd8, 0x3a, 0x10, 0x26, 0x27, 0x76}};


    /**
      * @brief Defines the universally-unique service ID for a shape service. 
      *        Use this service ID to get a pointer to the service interface 
      *        "IShapeService".
      *
      * @note  Textual Representation: {A426F28E-D4AB-4B5D-B943-9C5AEA112B57}
      */
    static const FCM::SRVCID FLA_SHAPE_SERVICE = 
        {0xa426f28e, 0xd4ab, 0x4b5d, {0xb9, 0x43, 0x9c, 0x5a, 0xea, 0x11, 0x2b, 0x57}};


    /**
      * @brief Defines the universally-unique service ID for a line generator 
      *        (text layout) service. Use this service ID to get a pointer 
      *        to the service interface "ITextLinesGeneratorService".
      *
      * @note  Textual Representation: {01EE81A5-B6A6-4923-AC12-2C2929613A1B}
      */
    static const FCM::SRVCID FLA_LINE_GENERATOR_SERVICE = 
        {0x1ee81a5, 0xb6a6, 0x4923, {0xac, 0x12, 0x2c, 0x29, 0x29, 0x61, 0x3a, 0x1b}};


    /**
      * @brief Defines the universally-unique service ID for a font table generator service. 
      *        Use this service ID to get a pointer to the service interface 
      *        "IFontTableGeneratorService".
      *
      * @note  Textual Representation: {8B2BE36C-31C7-4CAD-94DA-CB80B050C27E}
      */
    static const FCM::SRVCID FLA_FONTTABLE_GENERATOR_SERVICE = 
        {0x8b2be36c, 0x31c7, 0x4cad, {0x94, 0xda, 0xcb, 0x80, 0xb0, 0x50, 0xc2, 0x7e}};


    namespace Utils
    {
        /**
         * @brief Defines the class ID (which is universally unique) for 
         *        IMatrix2D.
         *
         * @note  Textual Representation: {A27A6B39-A541-4A89-B11E-5ECFEBF6D177}
         */
        static const FCM::FCMCLSID CLSID_Matrix2D =
            {0xa27a6b39, 0xa541, 0x4a89, {0xb1, 0x1e, 0x5e, 0xcf, 0xeb, 0xf6, 0xd1, 0x77}};
    };
    /**
     * @brief Defines the universally-unique service ID for a 3d media service.
     *        Use this service ID to get a pointer to the service interface
     *        "IMedia3DExportService".
     *
     * @note Textual Representation : {E4384380-EDF1-49FC-9F53-1C10CD7B85C1}
     */
    static const FCM::SRVCID FLA_MEDIA3D_SERVICE =
        {0xe4384380, 0xedf1, 0x49fc, {0x9f, 0x53, 0x1c, 0x10, 0xcd, 0x7b, 0x85, 0xc1}};
};


namespace Application
{
    /**
     * @def   kApplicationCategoryKey_DocType
     *
     * @brief Doc type category key. The value for this key should be a dictionary
     *        that defines a document type.
     */
    #define kApplicationCategoryKey_DocType     "Application.Component.Category.DocType"


    /**
     * @def   kApplicationCategoryKey_Publisher
     *
     * @brief Publisher category Key. The value for this key should be a dictionary
     *        that defines a publisher.
     */
    #define kApplicationCategoryKey_Publisher   "Application.Component.Category.Publisher"


    /**
     * @def   kApplicationCategoryKey_Name
     *
     * @brief The name key of the category. The value for this key should 
     *        have the name of the category of the component.
     *        A component may belong to many categories. Publisher and DocType 
     *        are examples of categories.
     */
    #define kApplicationCategoryKey_Name        "Application.Component.Category.Name"


    /**
     * @def   kApplicationCategoryKey_UniversalName
     *
     * @brief The universal name key of the category. The value for this key should
     *        have the universal name of the category of the component.
     *        A component may belong to many categories.
     */
    #define kApplicationCategoryKey_UniversalName   "Application.Component.Category.UniversalName"


    /**
     * @def   kApplicationDocTypeKey_Desc
     *
     * @brief DocType description key. The value for this key should have the description about the DocType.
     */
    #define kApplicationDocTypeKey_Desc             "Application.Component.DocType.Desc"

    
    /**
     * @def   kApplicationPublisherKey_UI
     *
     * @brief The ui key of the Publisher. The value is the ID of the publish settings UI
     */
    #define kApplicationPublisherKey_UI             "Application.Component.Publisher.UI"


    /**
     * @def   kApplicationPublisherKey_TargetDocs
     *
     * @brief The target docs key of the Publisher. The value is a dictionary with 
     *        keys as the target doc IDs supported by the Publisher. The values 
     *        in the dictionary are ignored.
     */
    #define kApplicationPublisherKey_TargetDocs     "Application.Component.Publisher.TargetDocs"


    namespace Service
    {
        /**
         * @brief Defines the universally-unique service ID for a "Adobe Animate CC" application service. 
         *        Use this service ID to get a pointer to the service interface 
         *        "IApplicationService".
         *
         * @note  Textual Representation: {8505E7FC-0B70-40C8-B3B8-BEC2BDCC8098}
         */
        static const FCM::SRVCID APP_SERVICE = 
            {0x8505e7fc, 0xb70, 0x40c8, {0xb3, 0xb8, 0xbe, 0xc2, 0xbd, 0xcc, 0x80, 0x98}};


        /**
         * @brief Defines the universally-unique service ID for a output console service. 
         *        Use this service ID to get a pointer to the service interface 
         *        "IOutputConsoleService". 
         *
         * @note  Textual Representation: {FCA7CC58-26E5-4A9F-865D-27E2DA47B07A}
         */
        static const FCM::SRVCID APP_OUTPUT_CONSOLE_SERVICE =
            {0xfca7cc58, 0x26e5, 0x4a9f, {0x86, 0x5d, 0x27, 0xe2, 0xda, 0x47, 0xb0, 0x7a}};
    }
};


namespace Exporter
{
    namespace Service
    {
        /**
         * @brief Defines the universally-unique service ID for a frame command generation 
         *        service. Use this service ID to get a pointer to the service interface 
         *        "IFrameCommandGenerator". 
         *
         * @note  Textual Representation: {2D8D7048-9E3E-4E2E-BE43-3564C970FF51}
         */
        static const FCM::SRVCID EXPORTER_FRAME_CMD_GENERATOR_SERVICE = 
            {0x2d8d7048, 0x9e3e, 0x4e2e, {0xbe, 0x43, 0x35, 0x64, 0xc9, 0x70, 0xff, 0x51}};


        /**
         * @brief Defines the universally-unique service ID for SWF export service. 
         *        Use this service ID to get a pointer to the service interface 
         *        "ISWFExportService".
         *
         * @note  Textual Representation: {21EFDEE6-B062-4227-A88E-3924E0808ACA}
         */
        static const FCM::SRVCID EXPORTER_SWF_SERVICE = 
            {0x21efdee6, 0xb062, 0x4227, {0xa8, 0x8e, 0x39, 0x24, 0xe0, 0x80, 0x8a, 0xca}};
    }
};


namespace Exporter
{
    namespace Service
    {
        /**
         * @def   kPublishSettingsKey_IncludeInvisibleLayer
         *
         * @brief This is a publish setting key used to configure if the invisible (hidden) layers
         *        need to be included as part of the export. This key can be used for any generic
         *        3rd party publisher. "Adobe Animate CC" interprets this key and updates the stage and 
         *        library item preview based on the settings of this key.
         *        Valid range is: "true" and "false". If this key is not set or an invalid value
         *        is set, the default value of "true" is used.
         */
        #define kPublishSettingsKey_IncludeInvisibleLayer       "PublishSettings.IncludeInvisibleLayer"


        /**
         * @def   kPublishSettingsKey_PreviewNeeded
         *
         * @brief This is a publish setting key used to set if preview is needed during publish.
         *        The value for this key can be set by "Adobe Animate CC" only. It is set to "true" in 
         *        publish workflows where preview needs to be shown such as "TestMovie" and set 
         *        to "false" in workflow such as "Publish". Note that plug-in cannot set this value.
         */
        #define kPublishSettingsKey_PreviewNeeded               "PublishSettings.PreviewNeeded"
    }
}


namespace Exporter
{
    namespace Service
    {
        /**
         * @def   kSWFPublishSettingsKey_PlayerVersion
         *
         * @brief This is a publish setting key used to set the SWF player target version.
         *        Valid values are : "FlashPlayer10.3", "FlashPlayer11.1",
         *        "FlashPlayer11.2", "FlashPlayer11.3", "FlashPlayer11.4", "FlashPlayer11.5", 
         *        "FlashPlayer11.6", "FlashPlayer11.7", "FlashPlayer11.8", "FlashPlayer11.9", 
         *        "FlashPlayer12.0", "FlashPlayer13.0". If this key is not set or an invalid value is set,
         *        it uses the highest player version installed in the machine.
         *        This should be used only if the SWF export service (ISWFExportService) is used.
         */
        #define kSWFPublishSettingsKey_PlayerVersion                "SWF.PublishSettings.PlayerVersion"


        /**
         * @def   kSWFPublishSettingsKey_ASVersion
         *
         * @brief This is a publish setting key used to set the ActionScript version.
         *        Only valid value is "3". If this key is not set or an invalid value is set,
         *        default value "3" is used.
         *        This should be used only if the SWF export service (ISWFExportService) is used.
         */
        #define kSWFPublishSettingsKey_ASVersion                    "SWF.PublishSettings.ASVersion"


        /**
         * @def   kSWFPublishSettingsKey_BitmapQuality
         *
         * @brief This is a publish setting key used to set the bitmap quality.
         *        Valid range is "1" to "100". If this key is not set or an invalid value is set,
         *        the default value "50" is used.
         *        This should be used only if the SWF export service (ISWFExportService) is used.
         */
        #define kSWFPublishSettingsKey_BitmapQuality                "SWF.PublishSettings.BitmapQuality"


        /**
         * @def   kSWFPublishSettingsKey_EnableDeblockingFilter
         *
         * @brief This is a publish setting key used to enable/disable de-blocking filter.
         *        Valid values are "true" and "false". If this key is not set or an invalid value is set,
         *        the default value "false" is used.
         *        This should be used only if the SWF export service (ISWFExportService) is used.
         */
        #define kSWFPublishSettingsKey_EnableDeblockingFilter       "SWF.PublishSettings.EnableDeblockingFilter"


        /**
         * @def   kSWFPublishSettingsKey_EnableMovieCompression
         *
         * @brief This is a publish setting key used to enable movie compression.
         *        Valid values are "true" and "false". If this key is not set or an invalid value is set,
         *        the default value "true" is used.
         *        This should be used only if the SWF export service (ISWFExportService) is used.
         */
        #define kSWFPublishSettingsKey_EnableMovieCompression       "SWF.PublishSettings.EnableMovieCompression"


        /**
         * @def   kSWFPublishSettingsKey_MovieCompressionType
         *
         * @brief This is a publish setting key used to set the type of movie compression.
         *        kSWFPublishSettingsKey_EnableMovieCompression must be set to "true" for this key
         *        to be effective. Valid range is : "Deflate" and "LZMA". If this key is not 
         *        set or an invalid value is set, default value of "Deflate" is used.
         *        This should be used only if the SWF export service (ISWFExportService) is used.
         */
        #define kSWFPublishSettingsKey_MovieCompressionType       "SWF.PublishSettings.MovieCompressionType"


        /**
         * @def   kSWFPublishSettingsKey_EnableSizeReport
         *
         * @brief This is a publish setting key used to enable/disable size report.
         *        Valid range is "true" and "false". If this key is not set or an invalid value
         *        is set, the default value of "false" is used.
         *        This should be used only if the SWF export service (ISWFExportService) is used.
         */
        #define kSWFPublishSettingsKey_EnableSizeReport                   "SWF.PublishSettings.EnableSizeReport"


        /**
         * @def   kSWFPublishSettingsKey_EnableOmitTrace
         *
         * @brief This is a publish setting key used to enable/disable omit trace.
         *        Valid range is "true" and "false". If this key is not set or an invalid value
         *        is set, the default value "false" is used.
         *        This should be used only if the SWF export service (ISWFExportService) is used.
         */
        #define kSWFPublishSettingsKey_EnableOmitTrace       "SWF.PublishSettings.EnableOmitTrace"


        /**
         * @def   kSWFPublishSettingsKey_ScriptTimeLimit
         *
         * @brief This is a publish setting key used to set script time limit. 
         *        If this key is not set or an invalid value is set, the default value 
         *        "15" is used.
         *        This should be used only if the SWF export service (ISWFExportService) is used.
         */
        #define kSWFPublishSettingsKey_ScriptTimeLimit       "SWF.PublishSettings.ScriptTimeLimit"


        /**
         * @def   kSWFPublishSettingsKey_PlaybackSecurity
         *
         * @brief This is a publish setting key used to set playback security.
         *        Valid values are "LocalAccess" and "NetworkAccess". If this key is not 
         *        set or an invalid value is set, the default value "LocalAccess" is used.
         *        This should be used only if the SWF export service (ISWFExportService) is used.
         */
        #define kSWFPublishSettingsKey_PlaybackSecurity       "SWF.PublishSettings.PlaybackSecurity"               


        /**
         * @def   kSWFPublishSettingsKey_HardwareAcceleration
         *
         * @brief This is a publish setting key used to configure Hardware acceleration mode.
         *        Valid values are "None," "Direct," and "GPU". If this key is not 
         *        set or an invalid value is set, the default value "None" is used.
         *        This should be used only if the SWF export service (ISWFExportService) is used.
         */
        #define kSWFPublishSettingsKey_HardwareAcceleration       "SWF.PublishSettings.HardwareAcceleration"
    }
};


namespace DOM
{
    namespace Service
    {
        namespace Tween
        {
            /**
             * @brief Defines the universally-unique service ID for Tweener service. 
             *        Use the Tweener service to get a pointer to the service interface 
             *        "ITweenerService".
             *
             * @note  Textual Representation: {58355F6B-EEF5-4530-8534-A3043663D7B3}
             */
            static const FCM::SRVCID TWEENER_SERVICE =
            { 0x58355f6b, 0xeef5, 0x4530, { 0x85, 0x34, 0xa3, 0x4, 0x36, 0x63, 0xd7, 0xb3 } };

            static const FCM::SRVCID TWEENINFO_SERVICE =
            { 0x9b055465, 0x2e8c, 0x429f, { 0xb3, 0xe, 0x5c, 0x93, 0xae, 0xfb, 0x3c, 0x15 } };
            
        }
    }
	
	namespace Tween
    {
            #define kTweenKey_TweenType                          "tweenType"
            #define kTweenKey_TweenDuration                      "tweenDuration"
            #define kTweenKey_Elements                           "elements"

            #define kTweenKey_Easing                            "easing"
            #define kTweenKey_EasingStrength                    "strength"

            /* Easing types */
			#define kEasing_Linear                              "Linear"
			#define kEasing_Quadratic                           "Quadratic"
			#define kEasing_Cubic                               "Cubic"
			#define kEasing_Quartic                             "Quartic"
			#define kEasing_Quintic                             "Quintic"
			#define kEasing_DualQuadratic                       "DualQuadratic"
			#define kEasing_DualCubic                           "DualCubic"
			#define kEasing_DualQuartic                         "DualQuartic"
			#define kEasing_DualQuintic                         "DualQuintic"
			#define kEasing_Bounce                              "Bounce"
			#define kEasing_BounceIn                            "BounceIn"
			#define kEasing_Spring                              "Spring"
			#define kEasing_SineWave                            "SineWave"
			#define kEasing_SawtoothWave                        "SawtoothWave"
			#define kEasing_SquareWave                          "SquareWave"
			#define kEasing_RandomSquareWave                    "RandomSquareWave"
			#define kEasing_DampedWave                          "DampedWave"
			#define kEasing_Custom                              "Custom"

            /* Properties that can be tweened */
            
            /* Geometric properties */
            #define kTweenProperty_Motion_X                     "Motion_X"
            #define kTweenProperty_Motion_Y                     "Motion_Y"
            #define kTweenProperty_Motion_Z                     "Motion_Z"
            
            #define kTweenProperty_Rotation_X                   "Rotation_X"
            #define kTweenProperty_Rotation_Y                   "Rotation_Y"
            #define kTweenProperty_Rotation_Z                   "Rotation_Z"
            
            #define kTweenProperty_Skew_X                       "Skew_X"
            #define kTweenProperty_Skew_Y                       "Skew_Y"
 
            #define kTweenProperty_Scale_X                      "Scale_X"
            #define kTweenProperty_Scale_Y                      "Scale_Y"

            /*Color properties*/
            #define kTweenProperty_Alpha_Amount                 "Alpha_Amount"

            #define kTweenProperty_Brightness_Amount            "Brightness_Amount"

            #define kTweenProperty_Tint_Color                   "Tint_Color"
            #define kTweenProperty_Tint_Amount                  "Tint_Amount"

            #define kTweenProperty_AdvClr_Red_Pct               "AdvClr_R_Pct"
            #define kTweenProperty_AdvClr_Red_Offset            "AdvClr_R_Offset"
            #define kTweenProperty_AdvClr_Green_Pct             "AdvClr_G_Pct"
            #define kTweenProperty_AdvClr_Green_Offset          "AdvClr_G_Offset"
            #define kTweenProperty_AdvClr_Blue_Pct              "AdvClr_B_Pct"
            #define kTweenProperty_AdvClr_Blue_Offset           "AdvClr_B_Offset"
            #define kTweenProperty_AdvClr_Alpha_Pct             "AdvClr_A_Pct"
            #define kTweenProperty_AdvClr_Alpha_Offset          "AdvClr_A_Offset"

            /* Filter properties*/
            #define kTweenProperty_DropShadow_BlurX             "DropShadow_BlurX"
            #define kTweenProperty_DropShadow_BlurY             "DropShadow_BlurY"
            #define kTweenProperty_DropShadow_Strength          "DropShadow_Strength"
            #define kTweenProperty_DropShadow_Angle             "DropShadow_Angle"
            #define kTweenProperty_DropShadow_Distance          "DropShadow_Distance"
            #define kTweenProperty_DropShadow_Knockout          "DropShadow_Knockout"
            #define kTweenProperty_DropShadow_InnerShadow       "DropShadow_InnerShadow"
            #define kTweenProperty_DropShadow_HideObject        "DropShadow_HideObject"
            #define kTweenProperty_DropShadow_Color             "DropShadow_Color"
            #define kTweenProperty_DropShadow_Quality           "DropShadow_Quality"

            #define kTweenProperty_Blur_BlurX                   "Blur_BlurX"
            #define kTweenProperty_Blur_BlurY                   "Blur_BlurY"
            #define kTweenProperty_Blur_Quality                 "Blur_Quality"

            #define kTweenProperty_Glow_BlurX					"Glow_BlurX"
            #define kTweenProperty_Glow_BlurY					"Glow_BlurY"
            #define kTweenProperty_Glow_Strength				"Glow_Strength"
            #define kTweenProperty_Glow_Color					"Glow_Color"
            #define kTweenProperty_Glow_Knockout				"Glow_Knockout"
            #define kTweenProperty_Glow_InnerGlow				"Glow_InnerGlow"
            #define kTweenProperty_Glow_Quality					"Glow_Quality"

            #define kTweenProperty_Bevel_BlurX					"Bevel_BlurX"
            #define kTweenProperty_Bevel_BlurY					"Bevel_BlurY"
            #define kTweenProperty_Bevel_Strength				"Bevel_Strength"
            #define kTweenProperty_Bevel_Angle					"Bevel_Angle"
            #define kTweenProperty_Bevel_Distance				"Bevel_Distance"
            #define kTweenProperty_Bevel_Knockout				"Bevel_Knockout"
            #define kTweenProperty_Bevel_Type					"Bevel_Type"
            #define kTweenProperty_Bevel_ShadowColor			"Bevel_ShadowColor"
            #define kTweenProperty_Bevel_HilightColor			"Bevel_HilightColor"
            #define kTweenProperty_Bevel_Quality				"Bevel_Quality"

            #define kTweenProperty_GradientGlow_BlurX			"GradientGlow_BlurX"
            #define kTweenProperty_GradientGlow_BlurY			"GradientGlow_BlurY"
            #define kTweenProperty_GradientGlow_Strength		"GradientGlow_Strength"
            #define kTweenProperty_GradientGlow_Angle			"GradientGlow_Angle"
            #define kTweenProperty_GradientGlow_Distance		"GradientGlow_Distance"
            #define kTweenProperty_GradientGlow_Knockout		"GradientGlow_Knockout"
            #define kTweenProperty_GradientGlow_Type			"GradientGlow_Type"
            #define kTweenProperty_GradientGlow_Gradient		"GradientGlow_Gradient"
            #define kTweenProperty_GradientGlow_Quality			"GradientGlow_Quality"

            #define kTweenProperty_GradientBevel_BlurX			"GradientBevel_BlurX"
            #define kTweenProperty_GradientBevel_BlurY			"GradientBevel_BlurY"
            #define kTweenProperty_GradientBevel_Strength		"GradientBevel_Strength"
            #define kTweenProperty_GradientBevel_Angle			"GradientBevel_Angle"
            #define kTweenProperty_GradientBevel_Distance		"GradientBevel_Distance"
            #define kTweenProperty_GradientBevel_Knockout		"GradientBevel_Knockout"
            #define kTweenProperty_GradientBevel_Type			"GradientBevel_Type"
            #define kTweenProperty_GradientBevel_Gradient		"GradientBevel_Gradient"
            #define kTweenProperty_GradientBevel_Quality		"GradientBevel_Quality"

            #define kTweenProperty_AdjColor_Brightness			"AdjColor_Brightness"
            #define kTweenProperty_AdjColor_Contrast			"AdjColor_Contrast"
            #define kTweenProperty_AdjColor_Saturation			"AdjColor_Saturation"
            #define kTweenProperty_AdjColor_Hue					"AdjColor_Hue"

	}
}


/* -------------------------------------------------- Structs / Unions */


/* -------------------------------------------------- Class Decl */


/* -------------------------------------------------- Inline / Functions */


#include "FCMPostConfig.h"

#endif // APPLICATION_FCM_PUBLIC_IDS_H_


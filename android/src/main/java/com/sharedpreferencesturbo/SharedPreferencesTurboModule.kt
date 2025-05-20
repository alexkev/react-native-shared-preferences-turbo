package com.sharedpreferencesturbo

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import android.content.Context

@ReactModule(name = SharedPreferencesTurboModule.NAME)
class SharedPreferencesTurboModule(reactContext: ReactApplicationContext) :
  NativeSharedPreferencesTurboSpec(reactContext) {

  override fun getName(): String {
    return NAME
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  private val sharedName = "RNSharedPreferences"

  private val sharedPreferences by lazy {
    reactContext.getSharedPreferences(sharedName, Context.MODE_PRIVATE)
  }
  
  override fun setItem(key: String, value: String): Unit {
    val editor = sharedPreferences.edit()
    // when (value) {
    //   is String -> editor.putString(key, value)
    //   // is Int -> editor.putInt(key, value)
    //   // is Long -> editor.putLong(key, value)
    //   // is Float -> editor.putFloat(key, value)
    //   // is Double -> editor.putFloat(key, value.toFloat())
    //   // is Boolean -> editor.putBoolean(key, value)
    //   else -> editor.putString(key, value?.toString())
    // }
    editor.putString(key, value?.toString())
    editor.apply()
  }
  
  override fun getItem(key: String): String? {
    // if (!sharedPreferences.contains(key)) {
    //   return null
    // }
    
    // // Try to determine the type from what's stored
    // try {
    //   sharedPreferences.getInt(key, 0)
    //   return sharedPreferences.getInt(key, 0)
    // } catch (e: ClassCastException) {
    //   // Not an integer
    // }
    
    // try {
    //   sharedPreferences.getLong(key, 0L)
    //   return sharedPreferences.getLong(key, 0L)
    // } catch (e: ClassCastException) {
    //   // Not a long
    // }
    
    // try {
    //   sharedPreferences.getFloat(key, 0f)
    //   return sharedPreferences.getFloat(key, 0f)
    // } catch (e: ClassCastException) {
    //   // Not a float
    // }
    
    // try {
    //   sharedPreferences.getBoolean(key, false)
    //   return sharedPreferences.getBoolean(key, false)
    // } catch (e: ClassCastException) {
    //   // Not a boolean
    // }
    
    // Default to string
    return sharedPreferences.getString(key, "")
  }
  
  override fun clear() {
    sharedPreferences.edit().clear().apply()
  }

  companion object {
    const val NAME = "SharedPreferencesTurbo"
  }
}

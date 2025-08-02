import supabase from "./supabase";

export const getSettings = async () => {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }
  return data;
};

// Expect a newSetting object that looks like {setting: newValue}
export const updateSetting = async (newSetting) => {
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    // Only one row of settings with ID=1
    .eq("id", 1)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be updated");
  }
  return data;
};

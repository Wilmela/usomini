import { cacheTag } from "next/cache";
import { getAllUsers } from "./user";
import { getProjectsDAL } from "./project";
import { getExecutivesDAL } from "./executives";
import { getNewsDAL } from "./news";

// Cache
export async function cachedUsers() {
  "use cache";
  cacheTag("users");

  return await getAllUsers();
}

export async function getCachedNews() {
  "use cache";
  cacheTag("news");

  return await getNewsDAL();
}

export async function getCachedExecutives() {
  "use cache";
  cacheTag("executives");

  return await getExecutivesDAL();
}

export async function cachedprojects() {
  "use cache";
  cacheTag("projects");

  const data = await getProjectsDAL();

  return data;
}

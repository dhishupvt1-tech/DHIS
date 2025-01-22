import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
export { auth as middleware } from "@/lib/auth"

const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

/*export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect();
  }
});*/
export default function bypass(){

}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

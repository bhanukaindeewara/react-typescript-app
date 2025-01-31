import Card from "@/components/websites/Card.tsx"
import App from "@/App.tsx"
import Website from "@/domain/websites/models/Website.ts"
import WebsiteCollection from "@/domain/websites/collections/WebsiteCollection.ts"
import { useEffect, useState } from "react"
import { getAllWebsitesInteractor } from "@/core/di/di.ts"

function Index() {
  const [websiteCollection, setWebsiteCollection] =
    useState<WebsiteCollection>()

  useEffect((): void => {
    getAllWebsitesInteractor
      .execute()
      .then((websiteCollection: WebsiteCollection): void => {
        setWebsiteCollection(websiteCollection)
      })
  }, [])

  return (
    <App>
      <div className="grid grid-cols-1 gap-y-6">
        {websiteCollection &&
          websiteCollection
            .all()
            .map((website: Website) => (
              <Card
                key={website.id}
                websiteId={website.id}
                title={website.title}
                description={website.description}
              ></Card>
            ))}
      </div>
    </App>
  )
}

export default Index

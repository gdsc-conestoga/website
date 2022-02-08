function ExternalLink({ url, explanation }) {
  return(
    <div>
      <div>
        <a href={url}>Link</a>
      </div>
      <div>
        {explanation}
      </div>
    </div>
  )
}

export default ExternalLink;